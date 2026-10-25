"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import UpdateUserDialog from "./UpdateUserDialog"

const UserCard = ({ user }) => {
  const { _id } = user
  const router = useRouter()
const handleDeleteUser = async (id) => {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });

  const afterDelete = await res.json();
  console.log("after delete", afterDelete);

  router.refresh();
};
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <CardHeader>
        <h2>No Action</h2>

        <CardTitle>{user.name}</CardTitle>

        <CardDescription>Email: {user.email}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href={`/users/${user._id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
        <UpdateUserDialog user={user}></UpdateUserDialog>
        <Button onClick={() => handleDeleteUser(_id)} variant="destructive">
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UserCard
