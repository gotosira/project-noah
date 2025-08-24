import { useAuth } from "@/components/providers/auth-provider";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="pt-24 px-4 max-w-4xl mx-auto">
      <section className="rounded-lg border bg-card text-card-foreground p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-muted-foreground">Email:</span>
            <span className="ml-2">{user?.email}</span>
          </div>
          {user?.aud && (
            <div>
              <span className="text-muted-foreground">Audience:</span>
              <span className="ml-2">{user.aud}</span>
            </div>
          )}
          {user?.id && (
            <div>
              <span className="text-muted-foreground">User ID:</span>
              <span className="ml-2 break-all">{user.id}</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Profile;


