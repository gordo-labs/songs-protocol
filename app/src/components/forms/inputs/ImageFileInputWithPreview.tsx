import PencilIcon from "@/components/icons/PencilIcon";
import { Body2, Body3 } from "@gordo-d/mufi-ui-components";
import cx from "classnames";
import Image from "next/image";
import { forwardRef, useEffect, useId, useRef, useState } from "react";

export interface ImageFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	defaultImageSrc?: string;
	rounded?: boolean;
	watchFile: string;
}

const ImageFileInputWithPreview = forwardRef<HTMLInputElement, ImageFileInputProps>(
	function ImageFileInputWithPreview(
		{
			label,
			className,
			defaultImageSrc = undefined,
			rounded = false,
			watchFile,
			required = false,
			...props
		}: ImageFileInputProps,
		ref,
	) {
		const id = useId();
		const [preview, setPreview] = useState<string | undefined>(defaultImageSrc ?? undefined);
		const inputRef = useRef<HTMLInputElement>(null);

		useEffect(() => {
			if (watchFile && inputRef.current) {
				const files = inputRef.current.files;

				if (files?.length) {
					const file = files[0];
					const urlImage = URL.createObjectURL(file);

					setPreview(urlImage);
				}
			} else {
				setPreview(defaultImageSrc);
			}
		}, [watchFile, defaultImageSrc]);

		return (
			<div className="flex w-full flex-col gap-2">
				{label && <Body2 color="neutral-600">{label}</Body2>}
				<div className="relative flex w-max flex-col items-end">
					<div
						className={cx({
							"h-40 w-40 bg-slate-200": true,
							"rounded-full": rounded,
							"rounded-base": !rounded,
						})}
					></div>
					{preview && (
						<Image
							className={cx({
								"absolute left-0 top-0 flex h-full w-full": true,
								"rounded-full": rounded,
								"rounded-base": !rounded,
							})}
							src={preview}
							width={819}
							height={819}
							alt="Default Image"
						/>
					)}
					<label
						htmlFor={id}
						className={cx({
							"absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity hover:opacity-100":
								true,
							"rounded-full": rounded,
							"rounded-base": !rounded,
						})}
					>
						<PencilIcon
							className="w-4 stroke-white"
							role="img"
							aria-label={`Edit ${label ?? ""}`}
						/>
					</label>
				</div>

				<input
					onChange={(e) => {
						console.log("HOLA");
						console.log(e.target.value);
					}}
					required={required}
					className="hidden"
					id={id}
					type="file"
					accept={".png, .jpg"}
					{...props}
					ref={ref}
				/>
			</div>
		);
	},
);
export default ImageFileInputWithPreview;
