import React from 'react';

export default function UploadFile() {

    const filesLoads = [
        {
            id: 1,
            name: "Yodgorov Ismatullo",
            date: "DD.MM.YYY",
            status: 'Checking/Draft',
            select: true
        },
        {
            id: 2,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 3,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 4,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 5,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 6,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 7,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 8,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 9,
            name: "",
            date: "",
            status: '',
            select: false
        },
        {
            id: 10,
            name: "",
            date: "",
            status: '',
            select: false
        },
    ]
  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-xl pb-10">
      <div className='w-full text-center p-5'>
        <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-[#00f0ff] font-semibold rounded-lg shadow-md hover:bg-[#2ecdd8] focus:outline-none">
          Upload File
          <input type="file" className="hidden" />
        </label>
      </div>
      <hr className='border-[#2ecdd8]'/>
      <div className="w-full">
        <h1 className='text-center mt-10 text-white text-xl mb-5'>List of saved, but not Uploaded files</h1>
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-[50px_1fr_1fr_1fr_50px] bg-white py-1 text-xl rounded-xl px-3">
            <div className="text-center">No</div>
            <div className="text-center">Name</div>
            <div className="text-center">Date</div>
            <div className="text-center">Status</div>
            <div className="text-center">Select</div>
          </div>
          {filesLoads.map((el, index) => {
            return (
                <div
                key={el.id || index}
                className="grid grid-cols-[50px_1fr_1fr_1fr_50px] w-full text-center mt-2 gap-2"
                >
                <div className="rounded-lg bg-gray-100 p-2">{el.id}</div>
                <div className="rounded-lg bg-gray-100 p-2">{el.name}</div>
                <div className="rounded-lg bg-gray-100 p-2">{el.date}</div>
                <div className="rounded-lg bg-gray-100 p-2">{el.status}</div>
                <div className="rounded-lg bg-gray-100 p-2">
                    <input type="checkbox" checked={el.select} onChange={() => {}} />
                </div>
                </div>
            );
            })}
        <div className='flex justify-between mt-6'>
            <button className='p-5 w-[200px] bg-[#ffe500] rounded-lg'>Edit</button>
            <button className='p-5 w-[200px] bg-[#05ff00] rounded-lg'>Submit</button>
        </div>
        </div>
      </div>
    </div>
  );
}
