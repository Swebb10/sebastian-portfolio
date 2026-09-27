# Raster companions to public/favicon.svg. Run with PowerShell on Windows.
Add-Type -AssemblyName System.Drawing
$outputDirectory = Join-Path $PSScriptRoot '../public'
$source = [System.Drawing.Bitmap]::new(1024, 1024)
$canvas = [System.Drawing.Graphics]::FromImage($source)
$canvas.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$canvas.ScaleTransform(16, 16)
$background = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#171b19'))
$foreground = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#f0eee5'))
$accent = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#d3a27c'))
$rounded = [System.Drawing.Drawing2D.GraphicsPath]::new()
$rounded.AddArc(0, 0, 28, 28, 180, 90)
$rounded.AddArc(36, 0, 28, 28, 270, 90)
$rounded.AddArc(36, 36, 28, 28, 0, 90)
$rounded.AddArc(0, 36, 28, 28, 90, 90)
$rounded.CloseFigure()
$canvas.FillPath($background, $rounded)
$letterS = '10,20 27,20 27,26 16,26 16,29 27,29 27,44 10,44 10,38 21,38 21,35 10,35'
$letterW = '30,20 36,20 39,35 43,24 47,24 51,35 54,20 60,20 55,44 49,44 45,33 41,44 35,44'
foreach ($letter in @($letterS, $letterW)) {
  [System.Drawing.PointF[]]$points = $letter.Split(' ') | ForEach-Object {
    $pair = $_.Split(',')
    [System.Drawing.PointF]::new(([float]$pair[0] - 3), [float]$pair[1])
  }
  $canvas.FillPolygon($foreground, $points)
}
$canvas.FillEllipse($accent, 52, 48, 6, 6)
$frames = @()
foreach ($size in @(16, 32, 48, 64, 180, 512)) {
  $bitmap = [System.Drawing.Bitmap]::new($size, $size)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($source, 0, 0, $size, $size)
  $stream = [System.IO.MemoryStream]::new()
  $bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
  $bytes = $stream.ToArray()
  if ($size -le 64) { $frames += @{ Size = $size; Bytes = $bytes } }
  if ($size -eq 180) { [System.IO.File]::WriteAllBytes((Join-Path $outputDirectory 'apple-touch-icon.png'), $bytes) }
  if ($size -eq 512) { [System.IO.File]::WriteAllBytes((Join-Path $outputDirectory 'logo-sw.png'), $bytes) }
  $stream.Dispose(); $graphics.Dispose(); $bitmap.Dispose()
}
$ico = [System.IO.MemoryStream]::new()
$writer = [System.IO.BinaryWriter]::new($ico)
$writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]$frames.Count)
$offset = 6 + 16 * $frames.Count
foreach ($frame in $frames) {
  $writer.Write([byte]$frame.Size); $writer.Write([byte]$frame.Size)
  $writer.Write([byte]0); $writer.Write([byte]0)
  $writer.Write([uint16]1); $writer.Write([uint16]32)
  $writer.Write([uint32]$frame.Bytes.Length); $writer.Write([uint32]$offset)
  $offset += $frame.Bytes.Length
}
foreach ($frame in $frames) { $writer.Write([byte[]]$frame.Bytes) }
[System.IO.File]::WriteAllBytes((Join-Path $outputDirectory 'favicon.ico'), $ico.ToArray())
$writer.Dispose(); $ico.Dispose(); $canvas.Dispose(); $source.Dispose()
$rounded.Dispose(); $background.Dispose(); $foreground.Dispose(); $accent.Dispose()
