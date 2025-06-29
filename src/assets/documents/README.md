# Documents Folder

Esta carpeta contiene los documentos que se mostrarán en la sección de Awards.

## Archivos requeridos:

1. **paper-classification-photographers.pdf** - Paper de investigación sobre clasificación de fotógrafos
2. **cambridge-c1-certificate.pdf** - Certificado de Cambridge C1

## Cómo actualizar los enlaces:

Edita el archivo `src/app/components/awardsSection/awardsSection.config.tsx` y actualiza las rutas:

```typescript
link: '/src/assets/documents/tu-archivo.pdf';
```

## Formatos soportados:

- PDF (.pdf)
- Documentos de Word (.doc, .docx)
- Imágenes (.jpg, .png, .webp)
