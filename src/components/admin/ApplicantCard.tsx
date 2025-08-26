import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Applicant } from '@/types/career';
import { careerAPI } from '@/lib/career-api';
import { toast } from 'sonner';
import { Download, Mail, Phone, Calendar, FileText, Edit, Save, X } from 'lucide-react';

interface ApplicantCardProps {
  applicant: Applicant;
  onUpdate: () => void;
}

const ApplicantCard = ({ applicant, onUpdate }: ApplicantCardProps) => {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(applicant.status);
  const [notes, setNotes] = useState(applicant.notes || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const success = await careerAPI.updateApplicantStatus(applicant.id, status, notes);
      if (success) {
        toast.success('Applicant updated successfully');
        setEditing(false);
        onUpdate();
      } else {
        toast.error('Failed to update applicant');
      }
    } catch (error) {
      console.error('Error updating applicant:', error);
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setStatus(applicant.status);
    setNotes(applicant.notes || '');
    setEditing(false);
  };

  const getStatusColor = (status: Applicant['status']) => {
    switch (status) {
      case 'Applied': return 'bg-blue-100 text-blue-800';
      case 'Shortlisted': return 'bg-yellow-100 text-yellow-800';
      case 'Interviewed': return 'bg-purple-100 text-purple-800';
      case 'Hired': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{applicant.name}</CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${applicant.email}`} className="hover:text-primary">
                  {applicant.email}
                </a>
              </div>
              {applicant.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${applicant.phone}`} className="hover:text-primary">
                    {applicant.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(applicant.status)}>
              {applicant.status}
            </Badge>
            {!editing && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditing(true)}
              >
                <Edit className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Applied: {new Date(applicant.appliedAt).toLocaleDateString()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(applicant.resumeUrl, '_blank')}
          >
            <Download className="w-4 h-4 mr-1" />
            Resume
          </Button>
        </div>

        {applicant.coverLetter && (
          <div>
            <div className="text-sm font-medium text-foreground mb-1">Cover Letter:</div>
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
              {applicant.coverLetter}
            </div>
          </div>
        )}

        {editing ? (
          <div className="space-y-4 pt-4 border-t">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Status
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="Interviewed">Interviewed</SelectItem>
                  <SelectItem value="Hired">Hired</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Notes
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes about this applicant..."
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={loading}
                size="sm"
              >
                <Save className="w-4 h-4 mr-1" />
                {loading ? 'Saving...' : 'Save'}
              </Button>
              <Button
                variant="outline"
                onClick={handleCancel}
                size="sm"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          applicant.notes && (
            <div className="pt-4 border-t">
              <div className="text-sm font-medium text-foreground mb-1">Notes:</div>
              <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                {applicant.notes}
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicantCard;