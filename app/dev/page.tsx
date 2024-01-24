import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'dev',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Coding</h2>
      <p className='my-5 text-gray-600'>
        I keep a development log for some of the project I'm working on, you can find them here:
      </p>
      <ol className='list-decimal pl-4 my-4'>
        <li>Vấn đề cần giải quyết là gì? </li>
        <li>Chia nhỏ vấn đề thành các phần nhỏ hơn. </li>
        <li>Thứ tự ưu tiêu giải quyết các phần. Làm nghiên cứu nếu cần thiết. </li>
        <li>Làm việc để giải quyết từng phần một. Không phiền nhiễu, loại bỏ những phần không cần thiết. </li>
        <li>Optimize. Document. </li>
      </ol>
    </div>
  );
}
