import { AccountLayout } from '@/components/account/AccountLayout';
import { AccountForm } from '@/components/account/AccountForm';

export const metadata = {
  title: 'My Account | VisioCreate',
  description: 'Manage your profile, addresses, and order history.',
};

export default function MyAccountPage() {
  return (
    <AccountLayout activeTab="account" title="My Account">
      <AccountForm />
    </AccountLayout>
  );
}
