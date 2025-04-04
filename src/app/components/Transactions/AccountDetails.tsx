'use client';

interface AccountDetailsProps {
  bankName?: string;
  accountType?: string;
  branchName?: string;
  accountNumber?: string;
  balance?: string;
  onEdit?: () => void;
  onRemove?: () => void;
  className?: string;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  bankName = 'AB Bank Ltd.',
  accountType = 'Checking',
  branchName = 'Park Street Branch',
  accountNumber = '133 456 886 8****',
  balance = '$25,056.00',
  onEdit = () => {},
  onRemove = () => {},
  className = ''
}) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md w-full ${className}`}>
      <h1 className="text-xl font-semibold mb-6 text-black">Account Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700">Bank Name</p>
          <p className="font-semibold text-gray-500">{bankName}</p>
        </div>
        <div>
          <p className="text-gray-700">Account Type</p>
          <p className="font-semibold text-gray-500">{accountType}</p>
        </div>
        <div>
          <p className="text-gray-700">Branch Name</p>
          <p className="font-semibold text-gray-500">{branchName}</p>
        </div>
        <div>
          <p className="text-gray-700">Account Number</p>
          <p className="font-semibold text-gray-500">{accountNumber}</p>
        </div>
        <div>
          <p className="text-gray-700">Balance</p>
          <p className="font-semibold text-gray-500">{balance}</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={onEdit}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition-colors"
        >
          Edit Details
        </button>
        <button 
          onClick={onRemove}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
