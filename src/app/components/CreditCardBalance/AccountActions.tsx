'use client';

interface AccountActionsProps {
  onAddAccounts?: () => void;
  onEditAccounts?: () => void;
  className?: string;
}

const AccountActions: React.FC<AccountActionsProps> = ({
  onAddAccounts = () => {},
  onEditAccounts = () => {},
  className = ''
}) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md text-center ${className}`}>
      <button 
        onClick={onAddAccounts}
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md mb-4 transition-colors cursor-pointer"
      >
        Add Accounts
      </button>
      <div 
        onClick={onEditAccounts}
        className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
      >
        Edit Accounts
      </div>
    </div>
  );
};

export default AccountActions;
