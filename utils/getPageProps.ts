import getFileData from './getFileData';
import getLayoutProps from './getLayoutProps';

const layoutProps = getLayoutProps();

export default function getPageProps<T = object>(filePath?: string[]) {
  let data = {} as any;
  if(filePath) {
    data = getFileData<T>(filePath);
  }

  return {...layoutProps, ...data };
}
