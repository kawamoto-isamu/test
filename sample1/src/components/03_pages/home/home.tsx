import React from 'react';
import './home.scss'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-header'>
        <h1>Yuta Hasegawa</h1>
        <p>フリーランスエンジニア</p>
      </div>
      <div className='home-contents'>
        <div className='child'>
          <h2>仕事内容</h2>
          <p>
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
            仕事内容が入ります仕事内容が入ります仕事内容が入ります<br />
          </p>
        </div>
        <div className='child'>
          <h2>個人の方へ</h2>
          <p>
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
            個人の方向けのメッセージ<br />
          </p>
        </div>
        <div className='child'>
          <h2>法人の方へ</h2>
          <p>
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
            法人の方向けのメッセージ<br />
          </p>
        </div>
        <div className='child'>
          <h2>お問い合わせ</h2>
          <p>
            email : xxxxxxxxxx@xxx.com<br />
            TEL : 000-0000-0000<br />
            address : OO-AAA-AAA<br />
          </p>
          <a href="/contact">問い合わせフォーム</a>
        </div>
      </div>
    </div>
  )
}

export default Home
