import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import Heading from "@/components/reusable/Heading";
import { TbUserPlus } from "react-icons/tb";

export default function SignUp() {
  return (
    <Center>
      <Card className="min-w-96">
        <Heading title="Sign up" icon={<TbUserPlus />} />
      </Card>
    </Center>
  );
}
