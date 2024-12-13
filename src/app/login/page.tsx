import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import Heading from "@/components/reusable/Heading";
import { TbLogin } from "react-icons/tb";

export default function Login() {

  return (
    <Center>
      <Card className="min-w-96">
        <Heading title="Login" icon={<TbLogin />} />
      </Card>
    </Center>
  );
}
