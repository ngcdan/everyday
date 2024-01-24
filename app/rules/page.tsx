import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'rules',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>
      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Rules</h2>
      <p className='my-5 text-gray-600'>
        Tôi xác định các quy tắc, quá trình và mục tiêu để tuân thủ. Tất cả đóng vai trò như khuôn khổ cho cách sống của tôi và giữ cho tôi tập trung.
        Frame và niềm tin sẽ cho phép mày xử lý các chuyện trong cuộc sống một cách uyển chuyển và có hệ thống.
      </p>
      <section className='my-5'>
        <h3 className='text-xl font-bold'>1. Keep it simple, stupid!</h3>
        <Image
          src="/images/kiss.jpg"
          width={660}
          height={440}
          className='pl-2'
          alt="Keep it simple, stupid" />

        <ul className='list-disc pl-5 my-4'>
          <li>Giữ cho mọi thứ đơn giản, tránh phức tạp.</li>
          <li>Giảm thiểu và đơn giản hoá. Loại bỏ sự lặp lại và ma sát, cản trở.</li>
          <li>Tập trung vào những yếu tố cần thiết.</li>
          <li>Sử dụng những thứ cần thiết. Tập trung vào những thứ mình có thể kiểm soát.</li>
        </ul>
        <p className='my-1'>Đặt nhiệm vụ và mục tiêu -&gt; Kế hoạch -&gt; Tập trung.</p>
      </section>
    </div>
  );
}
