import { isSupabaseConfigured } from '../../../lib/supabase/config';
import SetupNotice from '../_components/SetupNotice';
import LoginForm from '../_components/LoginForm';

export default function LoginPage() {
  return isSupabaseConfigured ? <LoginForm /> : <SetupNotice />;
}
