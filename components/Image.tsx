import clsx from 'clsx';
import Image from 'next/image';

export default function CustomImage({
	source,
	height,
	width,
	className,
	quality = 100,
	alt,
}: {
	source: string;
	height: number;
	width: number;
	quality?: number;
	className?: string;
	alt?: string;
}) {
	return (
		<Image
			src={source}
			height={height}
			width={width}
			quality={quality}
			className={clsx('', className)}
			draggable={false}
			alt={alt}
		/>
	);
}