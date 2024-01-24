import { Metadata } from 'next';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'rules',
};

export default function Page() {
  return (
    <div className='px-4 md:px-8 lg:px-12'>

      <div className='my-2'>
        <Image
          src="/images/woodcuts_5.jpg"
          width={1500}
          height={987}
          alt="Wood cut" />
      </div>

      <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Rules</h2>
      <p className='mt-5 text-gray-600'>
        Tôi xác định các quy tắc, quá trình và mục tiêu để tuân thủ. Tất cả đóng vai trò như khuôn khổ cho cách sống của tôi và giữ cho tôi tập trung.
      </p>
      <p className='text-gray-600'>
        Frame và niềm tin sẽ cho phép mày xử lý các chuyện trong cuộc sống một cách uyển chuyển và có hệ thống.
      </p>

      <section className='my-5'>
        <h3 className='text-xl font-bold'>Life</h3>
        <ol className='list-decimal pl-5 my-4'>
          <li className="mb-2">Đặt nhiệm vụ và mục tiêu -&gt; Kế hoạch -&gt; Tập trung.</li>
          <li className="mb-2">Chỉ tập trung vào một nhiệm vụ tại một thời điểm, tránh bị phân tâm. Luôn chú ý đến hành động và suy nghĩ của mình. Ý thức về giá trị của thời gian.</li>
          <li className="mb-2">Đơn giản hoá và giảm thiếu mọi thứ. Loại bỏ ma sát, tập trung vào những yếu tố cần thiết. Sử dụng những gì tôi cần. Tập trung vào những thứ tôi có thể kiểm soát.</li>
          <li className="mb-2">Quyết định những gì quan trọng với bản thân và tập trung vào nó. Tối ưu hoá tác động và tăng trưởng, lọc thông tin tiêu thụ để tối ưu hoá cho tín hiệu.</li>
          <li className="mb-2">Suy nghĩ từ những nguyên tắc đầu tiên (những điều căn bản). Học từ những thất bại. Phản chiếu (Reflect). Thích nghi, nắm bắt thay đổi. Chủ động. Mạnh dạn và cỡi mở. Nắm quyền sở hữu. Không bao giờ bỏ cuộc, không bao giờ than phiền. </li>
          <li className="mb-2">Đừng so sánh bản thân mình với người khác. Đừng ám ảnh về bất cứ ai. Học hỏi từ mọi người mà tôi ngưỡng mộ, thích. Sử dụng nó để cải thiện cuộc sống của tôi.</li>
          <li className="mb-2">Bao quanh bản thân với những người truyền cảm hứng và có thể tin tưởng để làm điều tốt. Hãy là con người thật của tôi. Truyền cảm hứng cho người khác.</li>
          <li className="mb-2">Đừng phán xét, ghét bỏ bất cứ ai. Cố gắng xem quan điểm của người khác. Tử tế. Thể hiện tình yêu thương và sự đồng cảm. Không có bản ngã, cái tôi.</li>
          <li className="mb-2">Hãy tự tin vào suy nghĩ và hành động của mình. Tìm kiếm và đưa ra phản hồi thẳng thắn. Đáp lại một cách lịch sự.</li>
          <li className="mb-2">Đặt câu hỏi: Trung thực, rõ ràng và ngắn gọn.</li>
          <li className="mb-2">Luôn tìm cách hoàn thiện và thay đổi bản thân mình chứ không phải ai khác. “Cỏ không xanh hơn ở phía bên kia, nó xanh hơn ở nơi bạn tưới nó. Đừng chăm chăm vào sự không hoàn hảo, hãy tìm kiếm vẻ đẹp trong mọi thứ.</li>
          <li className="mb-2">Tất cả những thành tựu đạt được đều phụ thuộc vào những kỹ năng xã hội mà anh ta có.</li>
          <li className="mb-2">Porn, Game và Internet là những thứ tạo ra dopamine gây cho ta sự hưng phấn tạm thời, thay vì phải va chạm bên ngoài xã hội để đạt được mục tiêu và hưởng lượng dopamine đấy. Tự cách ly xã hội là một hành vi ngu xuẩn, nó sẽ giết chết kỹ năng xã hội từ bên trong, nó sẽ dẫn tới các áp lực tiêu cực tới bản thân mày và người khác.</li>
          <li className="mb-2">Những kẻ lõi đời là những kẻ biết cách xã hội này vận hành.</li>
          <li className="mb-2">Hãy cảnh giác với thực tế là bất cứ ai cũng có thể nói dối (ở mọi phía), đặc biệt là khi nói về tin tức chính trị. Sự thật thường phức tạp hơn. Đừng vội kết luận. Có ý kiến, suy nghĩ của riêng tôi.</li>
          <li className="mb-2">Cố gắng và không thảo luận quá nhiều về những điều thực sự không ảnh hưởng đến cuộc sống của tôi theo bất kỳ cách nào.</li>
          <li className="mb-2">Luôn trong tâm thế thiết kế lại và đơn giản hoá mọi thứ.</li>
          <li className="mb-2">Bất cứ điều gì được thực hiện không đồng bộ là một hình thức tự động hoá, bạn đang sao chép con người hiện tại của mình để sẵn sàng cho một nhiệm vụ trong tương lai mà không cần phải ở đó.</li>
          <li className="mb-2">
            Sự khôn ngoan là nhận ra những gì mình có thể và không thể kiểm soát.
            <p>
              Mọi thứ trong cuộc sống đều thuộc một trong 2 loại : Những thứ bạn có thể kiểm soát và những thứ bạn không thể.
              Khi tập trung vào những thứ bạn có thể kiểm soát, bạn chủ động định hình tương lai của mình.
              Nhưng khi tập trung vào những thứ không thể kiểm soát, bạn sẽ bị quá khứ giam cầm.
            </p>
          </li>
          <li className="mb-2">Cảm xúc của bạn phụ thuộc vào kỳ vọng của bạn. (Your emotions depend on your expectations)
            <p> Cảm xúc = Thực tế - Kỳ vọng ( Emotions = Reality - Expectations )</p>
          </li>
          <li className="mb-2">Nhận thức đúng dẫn đến hành động đúng ( Right perception leads to right action )</li>
          <li className="mb-2">
            Các mối quan hệ của bạn sẽ tạo nên hoặc phá vỡ cuộc sống của bạn. ( Your relationships will make or break your life )
            <div>
              <ul className='list-disc pl-2'>
                <li className="mb-1">
                  Nếu bạn kéo mọi người xuống để leo lên cao hơn, những người xung quanh bạn cũng sẽ học cách làm như vậy.
                  Và ngay sau đó, bạn sẽ bị vây quanh bởi những người không làm gì khác ngoài việc kéo nhau xuống.
                </li>
                <li className="mb-1">
                  Nhưng nếu bạn nâng mọi người lên với bạn, những người xung quanh bạn cũng sẽ học cách làm như vậy,{' '}
                  và chẳng bao lâu, xung quanh bạn sẽ là những người luôn nâng đỡ nhau.
                </li>
                <li className="mb-1">Chất lượng cuộc sống của bạn không thể tách rời chất lượng của các mối quan hệ của bạn.</li>
              </ul>
            </div>
          </li>
          <li className="mb-2">Những thứ có giá trị nhất là những thứ đang có ở hiện tại.</li>
          <li className="mb-2">Gắn bó với những gì người khác nghĩ về bạn sẽ cướp đi tiềm năng của bạn.</li>
        </ol>
      </section>

      <section className='my-5'>
        <h3 className='text-xl font-bold'>Notes</h3>
        <ul className='list-disc pl-5'>
          <li className='mb-2'>Đàn ông tìm thấy niềm vui trong việc tạo ra giá trị. Họ có khao khát được tạo dựng, sáng chế, phát triển và cải tiến.</li>
          <li className='mb-2'>
            Bộ não không phải để nắm giữ thông tin, chúng là để suy nghĩ.
            Vì vậy, nếu bạn có thể làm trống bộ não của mình bằng cách viết nội dung vào danh sách việc cần làm, vào lịch, v.v..., bộ não sẽ có nhiều không gian cho những nội dung cấp cao khó viết hơn trên giấy.
            Và nếu bạn đã viết ra "làm điều gì" trong danh sách việc cần làm, thì bạn chỉ cần làm điều đó sau đó.
            Không có gì phải suy nghĩ và lo lắng nếu bạn viết ra mọi thứ chi tiết hơn.
          </li>
          <li className='mb-2'>
            Mô tả những gì mình đang làm như một quá trình. Nếu bạn không thể làm điều đó, bạn không biết mình đang làm gì.
          </li>
          <li className='mb-2'>Bạn không thể quản lý các dự án, bạn chỉ có thể quản lý các hành động liên quan đến dự án.</li>
          <li className='mb-2'>Sử dụng nổ lực tối thiểu để có được một kết quả nhất định (đừng cố gắng thêm nữa và loại bỏ những căng thẳng không cần thiết)</li>
          <li className='mb-2'>
            Chơi một nhạc cụ không cần cố gắng tạo ra một bài hát, có thể rất thư giản và hài lòng.
            Đặc biệt là khi bạn là người mới bắt đầu học.
            Nếu không, bạn có thể đang cố gắng hết sức để tạo ra một điều gì đó có ý nghĩa, phá huỷ niềm vui trong quá trình này.
            Vì vậy, lời khuyên của tôi là không nên cố gắng để tạo ra, mà chỉ đơn giản là say mê hành động và tận hưởng dòng chảy.
          </li>
          <li className='mb-2'>Quản lý các ưu tiên hơn là quản lý thời gian.</li>
          <li className='mb-2'>Điểm thú vị dường như là 2h giải trí mỗi ngày, hơn 5h giải trí sẽ thực sự khiến bạn cảm thấy tồi tệ hơn.</li>
          <li className='mb-2'>Mỗi khi tôi cảm thấy mình thiếu thời gian, tôi thực sự thiếu sự tập trung.</li>
          <li className='mb-2'>Hành động thay đổi thái độ nhanh hơn thái độ thay đổi hành động.</li>
          <li className='mb-2'>Không bao giờ làm việc trên 3-4 sáng kiến.</li>
          <li className='mb-2'>Khi một người không thể bắt đầu dự án mà họ quan tâm, điều đó thường là do:
            <ol className='list-decimal pl-5'>
              <li>Lo lắng về việc nỗ lực của họ không đủ tốt.</li>
              <li>Nhầm lầm về những bước đầu tiên của nhiệm vụ, không phải sự lười biếng.</li>
            </ol>
          </li>
          <li className='mb-2'>Cái giá phải trả cho chủ nghĩa hoàn hão: Dành thời gian để làm những thứ mà bạn không biết ai muốn.</li>
          <li className='mb-2'>
            Không bận rộn là 1 lợi thế cạnh tranh.
            Hầu hết mọi người đều eo hẹp về thời gian nên họ không thể tận dụng các cơ hội may mắn hoặc nhanh chóng giải quyết các vấn đề không mong muốn.
            Sự kết hợp lý tưởng là chủ động và linh hoạt.
          </li>
          <li className='mb-2'>Thế nào là xác định được những gì quan trọng với bản thân để theo đuổi một cách độc lập trước những trustment của người khác.</li>
          <li className='mb-2'>
            Một suy nghĩ rõ ràng dẫn đến hành động rõ ràng và có chủ đích.
            Sắp xếp suy nghĩ của bạn, giảm sự mở hồ của chúng và làm cho chúng rõ ràng bằng cách chuyển chúng thành các câu if else đơn giản
          </li>
          <li>Các giá trị của bạn quyết định liệu cuộc sống bên trong của bạn là yên bình hay căng thẳng.
            <ol className='list-decimal pl-5'>
              <li className='mb-1'>Nếu coi trọng tiền bạc nhưng không có, bạn sẽ dành cả cuộc đời trong 1 cuộc rượt đuổi căng thẳng để có được nó.</li>
              <li className='mb-1'>
                Nhưng nếu bạn coi trọng quá trình tạo ra những thứ hữu ích thay vào đó, bạn sẽ trải qua cuộc sống của mình trong yên bình.
              </li>
              <li className='mb-1'>
                Bạn đã sỡ hữu thứ mà bạn trân trọng: hành động của chính bạn. Nếu bạn coi trọng thứ gì đó mà hiện tại bạn không có, cuộc sống của bạn sẽ đầy căng thẳng cho đến khi bạn có được nó. Nhưng nếu coi trọng thứ gì đó bạn đang có, thì cuộc sống nội bộ của bạn rất yên bình.
              </li>
            </ol>
          </li>
        </ul>


      </section>


      <section className='my-5'>
        <h3 className='text-xl font-bold'>1. Keep it simple, stupid!</h3>
        <Image
          src="/images/kiss.jpg"
          width={660}
          height={440}
          className='pl-2'
          alt="Keep it simple, stupid" />
      </section>
    </div>
  );
}
