import { StyledMainLayout } from './styles/MainLayout.styled';

const MainLayout: React.FC = ({ children }) => {
  return (
      <StyledMainLayout>{children}</StyledMainLayout>
  );
};

export default MainLayout;
