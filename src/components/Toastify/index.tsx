import { ToastContainer } from 'react-toastify';

const Toastify: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div className={className}>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Toastify;
