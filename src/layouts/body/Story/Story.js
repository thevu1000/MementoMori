import classNames from 'classnames/bind';
import styles from './Story.module.scss';

const cx = classNames.bind(styles);

function Story({id}) {
    return (
        <div id={id} className={cx('wrapper')}>
            <img
                className={cx('background')}
                src="	https://mememori-game.com/assets/en/img/top/bg_story@pc.webp"
            ></img>
            <div className={cx('story-wrapper')}>
                <h3 className={cx('story-title')}>CỐT TRUYỆN</h3>

                <div className={cx('story')}>
                    <p>
                    Có những cô gái mà nhiều người gọi là <span>"phù thủy."</span>
                        <br />
                        Mặc dù bản thân họ là những người bình thường, họ có thể sử dụng những sức mạnh hơi khác thường một chút.
                        <br />  Tuy nhiên, khi tai họa lan rộng khắp vùng đất, những phù thủy bắt đầu bị sợ hãi và ghét bỏ. 
                        <br /> Không bao lâu sau, Giáo Hội Longinus bắt đầu thứ mà sau này được biết đến là 
                        <span> "Cuộc săn phù thủy".</span>
                    </p>
                    <p>
                    "Phù thủy là nguyên nhân của tai họa này. Nếu ta giết chúng, thì tai họa sẽ biến mất cùng với chúng!"
                    </p>
                    <p>
                        Các phù thủy bị hành quyết từng người một.
                        <br /> Nhưng bỗng một ngày, khi sự điên cuồng bắt đầu chiếm lĩnh thế giới, thì đột nhiên thế giới <br/>bị tràn ngập bởi các
                        <span>"Lời Nguyền".</span>
                        <br /> Một quốc gia bị thiêu cháy bởi lửa địa ngục.  Một vương quốc bị tiêu diệt bởi pha lê.<br/>Một đế chế bị thanh lọc bởi Cây Sống.
                        <br /> Đó là những mong muốn bi thảm của những người được gọi là 
                        <span> “Phù Thủy Qlipha”</span>
                        <br /> Không có gì để tự vệ, các quốc gia dần rơi vào diệt vong, Cuối cùng—
                        <br /> Các vùng đất tách nhau ra và bay vào không trung.
                    </p>
                    <p>
                        Trong khi đó, mọi người vẫn chưa nhận thức được.
                        <br /> Từ bên trong những cô gái bị nguyền rủa là phù thủy, tỏa ra những tia hy vọng.
                        <br /> Để cứu thế giới bị tàn phá của mình, những cô gái này bắt đầu giải thoát vùng đất khỏi bóng tối.
                        <br /> Bởi vì họ tin rằng đó là điều đúng đắn phải làm...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Story;
