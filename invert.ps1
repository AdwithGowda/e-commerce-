Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("c:\Users\adwit\Desktop\AG_EC\src\assets\agw2.png")
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if ($p.A -gt 0) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, 0, 0, 0))
        }
    }
}
$bmp.Save("c:\Users\adwit\Desktop\AG_EC\src\assets\agb2.png", [System.Drawing.Imaging.ImageFormat]::Png)
