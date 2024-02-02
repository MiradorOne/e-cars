import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactSlider from "react-slider";
import { CatalogContext } from "~/pages/CatalogPage";

interface Props {
  max: number;
  min: number;
  label: string;
}

export interface MinMaxInterface {
  id: string;
  minMax: number[];
}

const RangeFilter = ({ min, max, label }: Props) => {
  const [value, setValue] = useState<MinMaxInterface>({
    id: label,
    minMax: [min, max],
  });
  const [isRangeChosen, setRangeChosen] = useState<boolean>(false);
  const standardValue = useMemo(() => [min, max], [min, max]);
  const context = useContext(CatalogContext);

  const onChangeValue = (changeValue: number[]) => {
    setValue({ ...value, minMax: changeValue });
  };

  const onClickResetHandler = useCallback(() => {
    context.setCriteria(context.criteria.filter((val) => val.id !== label));
    setValue({ ...value, minMax: standardValue });
    setRangeChosen(false);
  }, [context, value, standardValue, label]);

  useEffect(() => {
    const existingValueIndex = context.criteria.findIndex(
      (obj) => obj.id === label
    );

    if (existingValueIndex === -1 && !isEqual(value.minMax, standardValue)) {
      setRangeChosen(true);
      context.setCriteria([...context.criteria, value]);
    } else if (
      existingValueIndex !== -1 &&
      !isEqual(value.minMax, standardValue)
    ) {
      const updatedCriteria = [...context.criteria];
      updatedCriteria[existingValueIndex] = {
        ...updatedCriteria[existingValueIndex],
        minMax: value.minMax,
      };
      context.setCriteria(updatedCriteria);
    }
  }, [value, label, standardValue]);

  useEffect(() => {
    if (context.criteria.length === 0 && isRangeChosen) {
      onClickResetHandler();
    }
  }, [context.criteria, label, onClickResetHandler, isRangeChosen]);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">{label}</p>
        <p
          onClick={onClickResetHandler}
          className="cursor-pointer text-xs text-gray-500"
        >
          Reset
        </p>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className="flex rounded-lg border border-solid border-gray-500 px-3 py-2.5">
          <p className="mr-1 text-gray-500">Min</p>
          <p className="text-gray-900">
            {value.minMax.length === 0 ? min : value.minMax[0]}
          </p>
        </div>
        <div className="flex rounded-lg border border-solid border-gray-500 px-3 py-2.5">
          <p className="mr-1 text-gray-500">Max</p>
          <p className="text-gray-900">
            {value.minMax.length === 0 ? max : value.minMax[1]}
          </p>
        </div>
      </div>
      <ReactSlider
        className="mb-8 rounded-r-sm [&>*:nth-child(1)]:rounded-l-sm [&>*:nth-child(1)]:bg-gray-300 [&>*:nth-child(3)]:bg-gray-300"
        trackClassName="h-[3px] bg-green-800"
        max={max}
        min={min}
        value={value.minMax}
        defaultValue={value.minMax}
        onAfterChange={(value) => onChangeValue(value)}
        renderThumb={(props) => (
          <div
            {...props}
            className="relative top-[-7px] h-[18px] w-[18px] rounded-2xl border-none bg-green-800 focus:border-gray-500"
          >
            <div className="absolute left-[3px] top-[3px] h-[12px] w-[12px] rounded-2xl bg-white"></div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeFilter;
function isEqual(array1: number[], array2: number[]): boolean {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => value === array2[index])
  );
}
