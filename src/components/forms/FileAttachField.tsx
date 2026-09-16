"use client";

import { Paperclip, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export function FileAttachField({
  files,
  onChange,
}: {
  files: File[];
  onChange: (files: File[]) => void;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [accept, setAccept] = useState("image/*");

  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setAccept(mobile ? "image/*" : "image/*,.pdf,.doc,.docx,.xls,.xlsx,.dwg,.dxf");
  }, []);

  const previews = useMemo(
    () =>
      files.map((file) => ({
        name: file.name,
        size: file.size,
        url: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
      })),
    [files],
  );

  useEffect(() => {
    return () => {
      previews.forEach((item) => {
        if (item.url) URL.revokeObjectURL(item.url);
      });
    };
  }, [previews]);

  return (
    <div className="grid gap-3">
      <p className="text-sm font-medium text-navy">Anexar arquivos</p>
      <div className="relative min-h-12 overflow-hidden rounded-md border border-line bg-mist">
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          className="file-gallery-input"
          onChange={(event) => {
            onChange(Array.from(event.currentTarget.files ?? []));
          }}
        />
        <div className="pointer-events-none flex min-h-12 items-center gap-3 px-4 py-3 text-sm text-navy">
          <Paperclip size={18} className="shrink-0 text-accent" />
          <span>
            {files.length > 0
              ? `${files.length} arquivo${files.length > 1 ? "s" : ""} selecionado${files.length > 1 ? "s" : ""}`
              : "Toque para escolher foto da galeria"}
          </span>
        </div>
      </div>
      <p className="text-xs leading-5 text-slate">
        No celular, o botão abre a galeria para você escolher a foto do equipamento, peça ou desenho.
      </p>
      {previews.length > 0 ? (
        <ul className="grid gap-2">
          {previews.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 rounded-md border border-line bg-white px-3 py-2"
            >
              {item.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.url} alt="" className="h-12 w-12 rounded object-cover" />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded bg-mist text-[10px] font-semibold uppercase text-slate">
                  arquivo
                </span>
              )}
              <span className="min-w-0 flex-1 truncate text-sm text-navy">{item.name}</span>
              <button
                type="button"
                className="relative z-20 rounded-md p-2 text-slate hover:bg-mist hover:text-navy"
                aria-label={`Remover ${item.name}`}
                onClick={() => {
                  const next = files.filter((_, fileIndex) => fileIndex !== index);
                  onChange(next);
                  if (next.length === 0 && inputRef.current) inputRef.current.value = "";
                }}
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
