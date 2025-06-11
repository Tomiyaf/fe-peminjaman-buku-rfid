import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function LoginPage() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-semibold text-xl">
        Sistem Peminjaman Buku Berbasis RFID
      </h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Masukkan username dan password Anda untuk masuk ke akun Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="username" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full hover:cursor-pointer">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
