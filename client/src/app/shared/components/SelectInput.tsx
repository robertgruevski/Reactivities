import { FormControl, FormHelperText, InputLabel, MenuItem } from "@mui/material";
import {
	type FieldValues,
	useController,
	type UseControllerProps,
} from "react-hook-form";
import Select, { type SelectProps } from "@mui/material/Select";

type Props<T extends FieldValues> = {
	items: { text: string; value: string }[];
} & UseControllerProps<T> &
	Partial<SelectProps>;

export default function SelectInput<T extends FieldValues>(props: Props<T>) {
	const { field, fieldState } = useController({ ...props });
	return (
		<FormControl fullWidth error={!!fieldState.error}>
			<InputLabel>{props.label}</InputLabel>
			<Select
				value={field.value || ""}
				label={props.label}
				onChange={field.onChange}>
				{props.items.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.text}
					</MenuItem>
				))}
			</Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
		</FormControl>
	);
}
