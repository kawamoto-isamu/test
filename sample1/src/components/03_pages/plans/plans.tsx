import React from 'react';
import './plans.scss'

const Plans = () => {
  return (
    <div className='plans-wrapper'>
      <div className='plans-header'>
        <h1>PLANS</h1>
      </div>
      <div className='plans-contents'>
        <div className='card 1'>
          <div className='head'>
            <h3>経理ライトプラン</h3>
            <h4>¥5,000/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>月50仕訳まで</li>
              <li>年末整理決済仕訳</li>
            </ul>
            <p className='annotation'>
              ※追加10仕訳につき500円追加徴収
            </p>
          </div>
        </div>
        <div className='card 2'>
          <div className='head'>
            <h3>経理スタンダードプラン</h3>
            <h4>¥10,000/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>月100仕訳まで</li>
              <li>年末整理決済仕訳</li>
              <li>収支報告書</li>
            </ul>
            <p className='annotation'>
              ※追加10仕訳につき500円追加徴収
            </p>
          </div>
        </div>
        <div className='card 3'>
          <div className='head'>
            <h3>経理丸ごとプラン</h3>
            <h4>¥30,000~/月</h4>
          </div>
          <div className='body'>
            <ul>
              <li>会社で経理を雇うイメージ</li>
              <li>明細取得や請求書作成</li>
            </ul>
            <p className='annotation'>
              ex: 記帳、収支、明細、納品書、請求書、交通費精算書、出金伝票作成
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
