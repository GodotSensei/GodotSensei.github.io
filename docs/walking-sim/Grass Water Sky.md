---
sidebar_position: 8
---

# Grass, Water, and Sky

Our walking sim is now complete, but we can make it even better.

I also want to talk about a few other useful parts of Godot, such as addons and shaders.  
I will cover these briefly while adding grass, water, and sky.

:::info set renderer to 'Forward+' ⚠
![Grass](<img/Grass, Water, and Sky/f+.png>)
Before adding grass or water, make sure your renderer is set to 'Forward+'. Otherwise, the shaders may not work correctly.  
If it’s not set to 'Forward+', select 'Forward+' in the top-right corner and click 'Restart Project'.".
:::

## Grass

Let’s fill these empty ground areas with grass. Right now your scene should look like this:
![Grass](<img/Grass, Water, and Sky/grass (1).png>)

To add grass, we need to use an **addon**.

When you switch to the **AssetLib** tab, it will look like this.
(You need an active internet connection to see this)
![Grass](<img/Grass, Water, and Sky/grass (2).png>)

Search for “grass” and you will see this addon.
![Grass](<img/Grass, Water, and Sky/grass (3).png>)

Click on the addon and then click Download.
![Grass](<img/Grass, Water, and Sky/grass (4).png>)

It will finish downloading quickly.
![Grass](<img/Grass, Water, and Sky/grass (5).png>)

Then click **Install**. Do not change any settings.
![Grass](<img/Grass, Water, and Sky/grass (6).png>)

After installation, you will see a message saying it was installed successfully.
You will also see a new folder named **addons** in the FileSystem panel.

Click OK and go back to the 3D view.
![Grass](<img/Grass, Water, and Sky/grass (7).png>)

Now go to **Project → Project Settings → Plugins**.
You will see the plugin we installed, but it is not enabled yet.
![Grass](<img/Grass, Water, and Sky/grass (8).png>)

Enable the plugin and close the window.
![Grass](<img/Grass, Water, and Sky/grass (9).png>)

Now select the **Demo** node and press Ctrl + A to create a new node.
Search for **grass**, and you will find **SimpleGrassTextured** node.
Click Create.
![Grass](<img/Grass, Water, and Sky/grass (10).png>)

Your viewport will now show a brush. You can paint grass by clicking.
![Grass](<img/Grass, Water, and Sky/grass (11).png>)

You can adjust the radius using the bracket keys.
![Grass](<img/Grass, Water, and Sky/grass (12).png>)

You can adjust the density using the plus and minus keys.
![Grass](<img/Grass, Water, and Sky/grass (13).png>)

Change radius and density as needed, and paint grass across the ground.
Use WASD movement to navigate.  
This is also a good chance to practice viewport movement.
![Grass](<img/Grass, Water, and Sky/grass (14).png>)

Use the Erase tool to remove grass. Shortcut is X.
![Grass](<img/Grass, Water, and Sky/grass (15).png>)

Switch back to the airbrush by pressing D.
Use correct brush sizes to speed up your workflow.
![Grass](<img/Grass, Water, and Sky/grass (16).png>)

You can also erase grass to create simple paths.
![Grass](<img/Grass, Water, and Sky/grass (17).png>)

Click on any other node to exit grass painting mode.
![Grass](<img/Grass, Water, and Sky/grass (18).png>)

Now you can see the grass with a small wind animation.
So now you learned how to use an addon to make your work easier.
![Grass](<img/Grass, Water, and Sky/grass (19).png>)

:::info Shortcuts 🌾  
**Brush size**: [ ]  
**Density**: + -  
**Paint mode**: D  
**Erase mode**: X  

**Viewport movement**: Right-click + W A S D  
**Fast movement**: Hold Shift while moving  
:::

:::info What is an Addon? 🧩
An addon is an extra tool or feature you can install to extend Godot’s abilities. It helps you do tasks faster without creating everything from scratch.
:::

## Water

We are going to make water. Before that, just hide the player, map, and grass for now.
![Water](<img/Grass, Water, and Sky/grass (20).png>)

Create a **MeshInstance3D** node and assign a **QuadMesh**.
![Water](<img/Grass, Water, and Sky/grass (21).png>)

You will see this. Rename it to **Water**.
![Water](<img/Grass, Water, and Sky/grass (22).png>)

Click on **QuadMesh** to open its sub-properties.
![Water](<img/Grass, Water, and Sky/grass (23).png>)

Change the orientation to face **Y**.
![Water](<img/Grass, Water, and Sky/grass (24).png>)

Change the size to **500 x 500** so it covers a larger area.
![Water](<img/Grass, Water, and Sky/grass (25).png>)

Next, add a **ShaderMaterial** to its **Material** property.  
![Water](<img/Grass, Water, and Sky/grass (26).png>)  

Click on it again to open sub-properties.  
![Water](<img/Grass, Water, and Sky/grass (27).png>)  

For the shader, create a **new shader**.  
![Water](<img/Grass, Water, and Sky/grass (28).png>)  

Keep everything default and click the **folder icon**.  
![Water](<img/Grass, Water, and Sky/grass (29).png>)  

Choose the **scripts** folder and rename it to **water**. Press open.  
![Water](<img/Grass, Water, and Sky/grass (30).png>)  

Hit **Create**.  
![Water](<img/Grass, Water, and Sky/grass (31).png>)  

Next, click on **water.gdshader**, and it will open the shader editor at the bottom.  
![Water](<img/Grass, Water, and Sky/grass (32).png>)  

Remove the existing code and replace it with this.  
**Code credits:** [Toon Water Shader](https://godotshaders.com/shader/toon-water/)

```
shader_type spatial;

render_mode unshaded;

uniform float slide_speed = 0.3;
uniform float wobble_speed = 1.0;
uniform float wobble_intensity = 0.4;
uniform float texture_scale = 0.2;
uniform sampler2D water : repeat_enable;
uniform sampler2D depth_texture : source_color, hint_depth_texture;

varying vec2 sample_choord;

void vertex() {

	VERTEX.y += sin(TIME * wobble_speed + (VERTEX.x + VERTEX.z) * 0.3) * 0.2;

	sample_choord = VERTEX.xz;
}

void fragment() {

	vec3 color1 = vec3(1,1,1);
	vec3 color2 = texture(
		water,
		vec2(
			(sample_choord.x + sin(TIME * wobble_speed) * wobble_intensity + TIME * slide_speed) * texture_scale,
			(sample_choord.y + cos(TIME * wobble_speed * 0.5) * wobble_intensity) * texture_scale
		)
	).rgb;

	float depth = texture(depth_texture, SCREEN_UV).x;
	vec3 ndc = vec3(SCREEN_UV * 2.0 - 1.0, depth);
	vec4 view = INV_PROJECTION_MATRIX * vec4(ndc, 1.0);
	view.xyz /= view.w;
	float linear_depth = -view.z;

	float object_depth = FRAGCOORD.z;
	vec3 object_ndc = vec3(SCREEN_UV * 2.0 - 1.0, object_depth);
	vec4 object_view = INV_PROJECTION_MATRIX * vec4(object_ndc, 1.0);
	object_view.xyz /= object_view.w;
	float linear_object_depth = -object_view.z;

	ALBEDO = mix(color1, color2, smoothstep(0.0, 4.0, linear_depth - linear_object_depth)) * 0.5; // Darken by 20%
}
```

After pasting, you will see a little animation.
![Water](<img/Grass, Water, and Sky/grass (33).png>)

Under **Shader Parameters**, we need to assign the water texture.
![Water](<img/Grass, Water, and Sky/grass (34).png>)

I found this cool water texture from OpenGameArt: <img src="https://opengameart.org/sites/default/files/y2k_water_texture.png" width="128px" height="128px" />
Download link: [Y2K Water Texture](https://opengameart.org/content/y2k-water-texture)

Drag and drop the downloaded texture into your **assets** folder.
![Water](<img/Grass, Water, and Sky/grass (35).png>)

Then drag it to the water shader slot. You will see stylish water.
![Water](<img/Grass, Water, and Sky/grass (36).png>)

Toggle the visibility of the player, map, and grass. Change the water’s Y position value to **2.5**. Now we have water!
![Water](<img/Grass, Water, and Sky/grass (37).png>)

:::info What is a Shader? 🎨
A shader is a small program that controls how an object looks. It defines colors, textures, lighting, and effects like water, fire, or special visual effects.
:::

## Sky

Next, let’s work on the sky.  
Click on **WorldEnvironment** and in the Inspector, click on **Environment**, then click on **Sky**.
![Sky](<img/Grass, Water, and Sky/grass (38).png>)

It currently has a procedural sky.  
Let’s replace it with a **Panorama Sky**.
![Sky](<img/Grass, Water, and Sky/grass (39).png>)

It will turn dark like this:
![Sky](<img/Grass, Water, and Sky/grass (40).png>)

Click on the Panorama Sky material, and it will ask for a panorama image.
![Sky](<img/Grass, Water, and Sky/grass (41).png>)

We need an image for it.  
Here’s a link to download one: [Sky Clouds 09 – 2K Resolution](https://freestylized.com/skybox/sky_clouds_09/)
![Sky](<img/Grass, Water, and Sky/download2k.png>)

Extract the downloaded zip file and add the sky image to your project’s **assets** folder.
![Sky](<img/Grass, Water, and Sky/grass (42).png>)

Then drag and drop it into the Panorama slot.
![Sky](<img/Grass, Water, and Sky/grass (43).png>)

Now the sky looks more vibrant and stylish.
![Sky](<img/Grass, Water, and Sky/grass (44).png>)

And that’s it for the sky!  
But there’s one more thing I haven’t told you yet… Guess what?  
We’ll cover it in the next section :)