import { useSelector } from 'react-redux';
import { RootState } from '../index';

const useUserStore = () => useSelector((state: RootState) => state.userStore);

export default useUserStore;
