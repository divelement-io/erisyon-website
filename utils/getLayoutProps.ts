import { FooterProps } from '../src/Components/Global/Footer';
import { HeaderProps } from '../src/Components/Global/Header';

import getFileData from './getFileData';

export default function getLayoutProps() {
  return {
    header: getFileData<HeaderProps>(['header.yaml']),
    footer: getFileData<FooterProps>(['footer.yaml']),
  };
}
