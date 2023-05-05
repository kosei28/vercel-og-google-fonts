import { loadGoogleFont } from '@/utils/font';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const text = 'ハローワールド';
  const fontData = await loadGoogleFont('Noto+Serif+JP', text);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          fontFamily: '"NotoSerifJP"',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'NotoSerifJP',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
