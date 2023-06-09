import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

export const Profile = () => {
  return (
    <div>

      <div className={'flex p-5 gap-5 items-center'}>
        <div className={'bg-blueLight w-[80px] h-[80px] rounded-full flex items-center'}><span className={'text-4xl m-auto'}>ИИ</span></div>
        <div>
          <h1 className={'text-xl font-bold'}>Иван Иванов</h1>
          <div>
            <ul className={'flex gap-4'}>
              <li>
                <FontAwesomeIcon icon={faFolder} className={'text-folderGrey pr-1'}/>
                <span className={'text-xs text-contactColor'}>Telegram</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faFolder} className={'text-folderGrey pr-1'}/>
                <span className={'text-xs text-contactColor'}>GitHub</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faFolder} className={'text-folderGrey pr-1'}/>
                <span className={'text-xs text-contactColor'}>Resume</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={'border-b border-borderLightGrey w-11/12 m-auto'}></div>
    </div>
  )
}
