import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Portal} from 'react-native-paper';
import {Props} from './interface';

export default function ZoomGallery({
  visible,
  images,
  index = 0,
  enableImageZoom = true,
  enableSwipeDown = true,
  onSwipeDown = () => {},
  otherProps,
}: Props) {
  return (
    <Portal>
      {visible && (
        <ImageViewer
          imageUrls={images}
          index={index}
          enableImageZoom={enableImageZoom}
          enableSwipeDown={enableSwipeDown}
          onSwipeDown={onSwipeDown}
          {...otherProps}
        />
      )}
    </Portal>
  );
}
