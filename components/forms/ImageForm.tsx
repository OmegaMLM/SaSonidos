"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaFileUpload } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@heroui/button";
import { CircularProgress } from "@heroui/react";

type CameraIconProps = React.SVGProps<SVGSVGElement> & {
  fill?: string;
  size?: number;
};
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CameraIcon = ({ fill = "currentColor", size, height, width, ...props }: CameraIconProps) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};






const ImageForm = ({ value, onChange }: Props) => {
  const [image, setImage] = useState(value);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setImage(value);
  }, [value]);

  const onFilesSelected = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", target.files[0]);

      const res = await fetch("/api/image", {
        method: "POST",
        body: formData,
      });

      const { secure_url } = await res.json();
      setImage(secure_url);
      onChange(secure_url);
    } catch (err) {
      console.error("Error al subir imagen", err);
    } finally {
      setUploading(false);
      target.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFilesSelected}
      />

      <Button
        type="button"
        className="w-full"
        color="primary"
        variant="solid"
        onClick={() => fileInputRef.current?.click()}
        startContent={<CameraIcon />}
        isDisabled={uploading}
      >
        {uploading ? <CircularProgress size="sm" color="primary" /> : "Subir imagen"}
      </Button>

      {image && (
        <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-default-200 shadow">
          <Image
            src={image}
            alt="Imagen subida"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageForm;
