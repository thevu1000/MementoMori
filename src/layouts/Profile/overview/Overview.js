import classNames from "classnames/bind";
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview({ datas }) {
    const data = datas.overview;
    return (
        <div className={cx('wrap')}>
            <div className={cx('profile-wrap')}>
                <h3 className={cx('profile-header')}>TIỂU SỬ</h3>
                <p className={cx('profile-content')}>
                    {data.profile}
                </p>
            </div>

            <div className={cx('Skills-wrap')}>
                <h3 className={cx('Skills-header')}>KỸ NĂNG</h3>
                <div className={cx('Skill-item-wrap')}>
                    {data.skills.map((skill, index) => (
                        <div className={cx('Skill-item')} key={index}>
                            <div className={cx('skill-header')}>
                                <div className={cx('skill-img')}>
                                    <img alt="abc" src={skill.image}></img>
                                </div>

                                <div className={cx('skill-name')}>
                                    <h4 className={cx('skill-sub')}>{skill.type}</h4>
                                    <h3 className={cx('skill-main')}>{skill.name}</h3>
                                </div>

                                <div className={cx('skill-cd')}>
                                    <h4 className={cx('cd-icon')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                                        </svg>
                                    </h4>
                                    <h3 className={cx('cd-turn')}>
                                        {skill.cooldown !== "-" ? (
                                            `${skill.cooldown} Lượt`
                                        ) : (
                                            `${skill.cooldown}`
                                        )}
                                    </h3>
                                </div>

                            </div>
                            <div className={cx('skill-desc')}>
                                {skill.unlock_condition ? (
                                    <p>
                                        {skill.description} <span>{skill.unlock_condition}</span>
                                    </p>

                                ) : (
                                    <p>
                                        {skill.description}
                                    </p>
                                )}

                                <div className={cx('unlock-able')}>
                                    {skill.levels && (skill.levels.map((level, index) => (
                                        <p key={index}><strong>(LV {level.level})</strong> {level.changes}<span>{level.unlock_condition}</span></p>
                                    )))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {data.unique_weapon && (
                <div className={cx('weapon-wrap')}>
                    <h3 className={cx('weapon-header')}>CHI TIẾT VỀ VŨ KHÍ TRẤN</h3>
                    <div className={cx('weapon-item')}>
                        <div className={cx('weapon-header-wrap')}>
                            <div className={cx('weapon-img')}>
                                <img alt="abc" src={data.unique_weapon.image}></img>
                            </div>

                            <div className={cx('weapon-name')}>
                                <h4 className={cx('weapon-sub')}>Vũ khí trấn dành cho {datas.ver ? `[${datas.ver}]` : ''} {datas.name}</h4>
                                <h3 className={cx('weapon-main')}>
                                    {data.unique_weapon.name}<br />
                                    {data.unique_weapon.vietnamese_name && (
                                        <span>({data.unique_weapon.vietnamese_name})</span>
                                    )}
                                </h3>
                            </div>



                            <div className={cx('skill-cd')}>
                                <h4 className={cx('cd-icon')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                                    </svg>
                                </h4>
                                <h3 className={cx('cd-turn')}>-</h3>
                            </div>
                        </div>
                        <div className={cx('weapon-desc')}>
                            <h4>Hiệu ứng kỹ năng</h4>
                            <div className={cx('unlock-able')}>
                                {data.unique_weapon.levels.map((level, index) => {
                                    return (
                                        <p key={index}>
                                            <strong>(LV {level.level})</strong> {level.changes}
                                            {level.unlock_condition === 'SSR' && (
                                                <span style={{ fontWeight: 'bold' }}>(Mở khóa ở <span style={{ color: '#AA66CC', fontWeight: 'bold' }}>{level.unlock_condition}</span>)</span>
                                            )}
                                            {level.unlock_condition === 'UR' && (
                                                <span style={{ fontWeight: 'bold' }}>(Mở khóa ở <span style={{ color: '#CF3B46', fontWeight: 'bold' }}>{level.unlock_condition}</span>)</span>
                                            )}
                                            {level.unlock_condition === 'LR' && (
                                                <span style={{ fontWeight: 'bold' }}>(Mở khóa ở <span style={{ color: 'black', fontWeight: 'bold', textShadow: '0px 0px 5px white' }}>{level.unlock_condition}</span>)</span>
                                            )}
                                        </p>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Overview;
