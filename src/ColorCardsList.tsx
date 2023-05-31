import { animated, useTransition } from "@react-spring/web";
import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./feautres";

const ColorCardsList: FC = () => {
  const colors = useSelector((state: RootState) => state.common.colorsList);

  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);

  const transitions = useTransition(colors, {
    keys: (item) => item.key,
    from: { opacity: 0, width: 0, life: "100%", x: 0 },
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({
        opacity: 1,
        width: refMap.get(item).offsetWidth + 10,
      });
      await next({ life: "0%" });
    },
    leave: [{ x: 200, opacity: 0 }, { width: 0 }],
    config: (_item, _index, phase) => (key) =>
      phase === "enter" && key === "life"
        ? { duration: 100.0 }
        : { tension: 125, friction: 20, precision: 0.1 },
  });

  return (
    <div className="color-cards-list">
      {transitions((styles, item) => (
        <animated.div style={styles} key={item.key}>
          <div
            ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}
            className="color-card"
            style={{
              backgroundColor: item.color,
            }}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default ColorCardsList;
