import Navbar from '../../components/navbar/page'
import Sidebar from '../../components/sidebar/page'
import UploadFile from '../../components/uploadFile/page'

export default function Dashboard() {
  return (
    <div className='w-screen flex flex-col h-screen bg-bg-image bg-cover gap-2 '>
        <Navbar/>
        <div className='flex flex-grow gap-3 relative'>
            <Sidebar/>
            <div className='w-full me-3'>
                <UploadFile/>
            </div>
        </div>
    </div>
  )
}
