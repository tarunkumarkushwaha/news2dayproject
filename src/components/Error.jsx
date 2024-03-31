import { useRouteError } from 'react-router-dom'
import SideBar from './SideBar';

export default function Error() {
  const error = useRouteError()
  console.log(error);
  return <div>
    <SideBar/>
    Something went wrong.
    </div>
}
