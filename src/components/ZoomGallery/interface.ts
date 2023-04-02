import {ViewStyle} from 'react-native';
import {IImageInfo} from 'react-native-image-zoom-viewer/built/image-viewer.type';

export interface Props {
  otherProps?: ImageViewerProps;
  images: IImage[];
  visible: boolean;
  enableImageZoom?: boolean;
  enableSwipeDown?: boolean;
  onSwipeDown?: () => void;
  index?: number;
}

export interface IImage {
  url: string;
}

export interface ImageViewerProps {
  /**
   * 是否显示
   */
  show?: boolean;
  /**
   * 图片数组
   */
  flipThreshold?: number;
  /**
   * 当前页能滑到下一页X位置最大值
   */
  maxOverflow?: number;
  /**
   * 初始显示第几张图
   */
  index?: number;
  /**
   * 加载失败的图
   */
  failImageSource?: IImageInfo;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * style props for the footer container
   */
  footerContainerStyle?: object;
  /**
   * Menu Context Values
   */
  menuContext?: any;
  /**
   * 是否开启长按保存到本地的功能
   */
  saveToLocalByLongPress?: boolean;
  /**
   * 是否允许缩放图片
   */
  enableImageZoom?: boolean;
  style?: ViewStyle;
  /**
   * Enable swipe down to close image viewer.
   * When swipe down, will trigger onCancel.
   */
  enableSwipeDown?: boolean;
  /**
   * threshold for firing swipe down function
   */
  swipeDownThreshold?: number;
  doubleClickInterval?: number;
  /**
   * Min and Max scale for zooming
   */
  minScale?: number;
  maxScale?: number;
  /**
   * 是否预加载图片
   */
  enablePreload?: boolean;
  /**
   * 翻页时的动画时间
   */
  pageAnimateTime?: number;
  /**
   * 是否启用原生动画驱动
   * Whether to use the native code to perform animations.
   */
  useNativeDriver?: boolean;
  /**
   * 长按图片的回调
   */
  onLongPress?: (image?: IImageInfo) => void;
  /**
   * 单击回调
   */
  onClick?: (close?: () => any, currentShowIndex?: number) => void;
  /**
   * 双击回调
   */
  onDoubleClick?: (close?: () => any) => void;
  /**
   * 图片保存到本地方法，如果写了这个方法，就不会调取系统默认方法
   * 针对安卓不支持 saveToCameraRoll 远程图片，可以在安卓调用此回调，调用安卓原生接口
   */
  onSave?: (url: string) => void;
  onMove?: (position?: any) => void;
  /**
   * 自定义头部
   */
  renderHeader?: (currentIndex?: number) => React.ReactElement<any>;
  /**
   * 自定义尾部
   */
  renderFooter?: (currentIndex: number) => React.ReactElement<any>;
  /**
   * 自定义计时器
   */
  renderIndicator?: (
    currentIndex?: number,
    allSize?: number,
  ) => React.ReactElement<any>;
  /**
   * Render image component
   */
  renderImage?: (props: any) => React.ReactElement<any>;
  /**
   * 自定义左翻页按钮
   */
  renderArrowLeft?: () => React.ReactElement<any>;
  /**
   * 自定义右翻页按钮
   */
  renderArrowRight?: () => React.ReactElement<any>;
  /**
   * 弹出大图的回调
   */
  onShowModal?: (content?: any) => void;
  /**
   * 取消看图的回调
   */
  onCancel?: () => void;
  /**
   * function that fires when user swipes down
   */
  onSwipeDown?: () => void;
  /**
   * 渲染loading元素
   */
  loadingRender?: () => React.ReactElement<any>;
  /**
   * 保存到相册的回调
   */
  onSaveToCamera?: (index?: number) => void;
  /**
   * 当图片切换时触发
   */
  onChange?: (index?: number) => void;
  menus?: ({cancel, saveToLocal}: any) => React.ReactElement<any>;
}
