/**
 * Created by guangqiang on 2017/9/7.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/actionType'
import Action from '../../actionCreators/music'
const getMusicId = createAction(type.MUSIC_ID_LIST, Action.musicIdList)
const getMusicDetail = createAction(type.MUSIC_DETAIL, Action.musicDetail)
const getMusicList = createAction(type.MUSIC_LIST, Action.musicList)

const actionCreators = {
  getMusicId,
  getMusicDetail,
  getMusicList
}

export default {actionCreators}