import { Button } from "@/components/ui/button";

export function DeleteProfileModal() {
  const handleDelete = () => {
    alert("Delete profile functionality coming soon!");
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete Profile
    </Button>
  );
}