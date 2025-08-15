import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
};

export default Layout;
