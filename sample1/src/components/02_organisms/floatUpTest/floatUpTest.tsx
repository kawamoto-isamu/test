import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  createRef,
  RefObject,
} from 'react'
import {
  // useOnScreen,
  useIntersectionObserver,
 } from 'static/ts/hooks'
import './floatUpTest.scss'

const FloatUpTest = () => {
  const ABOUT_CONTENTS = [
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1 test text', 
    '1', '1', '1', '1', '1', '1', '1', '1'
  ]
  const hListRefs = useRef<RefObject<HTMLInputElement>[]>([]);

  const showElements = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('VISIBLE') // 画面内に表示中
        return;
      }
      if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove('VISIBLE') // 画面より下に表示中
      } else {
        // entry.target.classList.remove('VISIBLE') // 画面より上に表示中
      }
    })
  }


  const renderHList = ABOUT_CONTENTS.map(
    (contents, index) => {

      let key = 'sec-wrap' + index.toString()

      hListRefs.current[index] = createRef();

      return (
        <div
          className={'sec-wrap'}
          key={key}
        >
          <h1
            className={'h-contents'}
            key={key}
            ref={hListRefs.current[index] }
          >
            {contents}
          </h1>
        </div>
      )
    }
  )

  useIntersectionObserver(hListRefs.current, showElements)
  return (
    <div className={'floatUpTest-wrapper'}>
      <div className={'contents'}>
        {renderHList}
     </div>
    </div>
  )
}

export default FloatUpTest;
