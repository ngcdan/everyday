import Link from 'next/link'

export default function Page({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1>
        <Link className="font-bold text-2xl" href="/everyday/reading/cultivate-an-inclination-towards-resistance-and-pain">
          Cultivate an inclination towards resistance and pain.
        </Link>
      </h1>
      <div className="desc text-stone-500 font-mono text-sm py-2">Posted On 29.01.2024</div>
      <p>
        Về bản chất, con người chúng ta luôn lẳng tránh thứ gì có vẻ đau đớn và khó khăn. Chúng ta mang khuynh hướng này{' '}
        vào quá trình thực hành bất cứ kỹ năng nào. <br />
        Sau khi thành thạo một vài khía cạnh của kỹ năng, thường là các khía cạnh ta tiếp thu dễ dàng, {' '}
        chúng ta thích lặp lại các yếu tố đó, kỹ năng bị mất cân đối vì chúng ta né tránh điểm yếu của mình.
        <br />
        Nhìn chung, chúng ta hay làm theo những gì người khác đã làm. Con đường này chỉ dành cho những kẻ nghiệp dư.
      </p>
      <p>
        Để làm chủ, phải sử dụng hình thức gọi là thực hành đề kháng. <br />
        Nguyên tắc là đi ngược lại so với mọi xu hướng tự nhiên của bản thân khi thực hành.
        <br />
        Phê bình nghiêm khắc bản thân, xem xét thành quả của mình như thể dưới con mắt của người khác. {' '}
        Nhìn ra các điểm yếu của mình, cũng chính là những yếu tố mình không giỏi. {' '}
        Đây là các khía cạnh nên dành  ưu tiên khi thực hành. <br />
        Tìm ra các thú vui trong việc vượt qua nỗi đau mà quá trình này đem tới. <br />
        Đề kháng cám dỗ hướng sự tập trung của mình về phía dễ dàng. <br />
        Liên tục thúc ép bản thân vượt qua giới hạn nhận thức trong quá khứ.
      </p>

      <p className='italic py-1'>
        Khi thực hành, đừng theo bản năng, chọn các việc khó để làm, đặt ra các giới hạn, các tiêu chuẩn để bản thân vượt qua.
      </p>
    </div>
  )
}