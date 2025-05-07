import { User, Bell, Shield, Paintbrush, CreditCard, Plug } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Settings */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <User className="text-blue-600" />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Update name, email, and photo.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        {/* Notifications Settings */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="text-green-600" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Choose how you receive alerts.</p>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Notification Settings
          </button>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="text-red-600" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Change password and 2FA.</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Security Options
          </button>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Paintbrush className="text-purple-600" />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Choose themes and layout settings.</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Customize Look
          </button>
        </div>

        {/* Billing Settings */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="text-yellow-600" />
            <h2 className="text-xl font-semibold">Billing</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Manage payment methods and invoices.</p>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
            Billing Info
          </button>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Plug className="text-indigo-600" />
            <h2 className="text-xl font-semibold">Integrations</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Connect with third-party services.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Manage Integrations
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
