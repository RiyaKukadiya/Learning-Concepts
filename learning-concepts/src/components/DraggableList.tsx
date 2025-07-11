'use client';

import React, { useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash.clamp';
import swap from 'lodash-move';
import styles from './DraggableList.module.css';

declare module 'lodash.clamp';
declare module 'lodash-move';

const fn = (
  order: number[],
  active = false,
  originalIndex = 0,
  curIndex = 0,
  y = 0
) => (index: number) =>
  active && index === originalIndex
    ? {
        y: curIndex * 50 + y,
        scale: 1.1,
        zIndex: 1,
        shadow: 15,
        immediate: (key: string) => key === 'y' || key === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 50,
        scale: 1,
        zIndex: 0,
        shadow: 1,
        immediate: false,
      };

function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index));
  const [springs, api] = useSprings(items.length, fn(order.current));
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(Math.round((curIndex * 50 + y) / 50), 0, items.length - 1);
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y));
    if (!active) order.current = newOrder;
  });
  return (
    <div>
        <h1 className="w-full font-bold text-4xl text-center mb-10 pt-20">Drag and drop item</h1>
    <div className={styles.content} style={{ height: items.length * 50 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={styles.item}
          style={{
            zIndex,
            boxShadow: shadow.to((s: number) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale,
            touchAction: 'none',
          }}
        >
          {items[i]}
        </animated.div>
      ))}
    </div>
    </div>
  );
}

export default DraggableList;
