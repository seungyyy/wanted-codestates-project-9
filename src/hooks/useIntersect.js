import React, { useState, useEffect, useCallback } from 'react';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

const useIntersect = (onIntersect, option) => {
  const [ref, setRef] = useState(null);
  
// intersecting이 있을 때 target 엔트리와 observer를 넘기기.
  const checkIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
    }
  }, []);
  // ref나 option이 바뀔 경우 observer를 새로 등록한다.
  useEffect(() => { 
    let observer;
    if (ref) { 
      observer = new IntersectionObserver(checkIntersect, {
        ...option,
        ...defaultOption,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, option.root, option.threshold, option.rootMargin, checkIntersect])
  
  return [ref, setRef];
}

export default useIntersect;