---
sidebar_position: 7
---

# The Walking Simulator

First of all, let’s clear your project.  
You can either delete everything inside the scene or create a brand-new project.  

I'm simply deleting the unnecessary nodes to prepare for the next steps.  
**Just don’t delete the DirectionalLight3D and WorldEnvironment nodes.**  
(If you delete them by mistake, you already know how to add them back from the previous lesson.)  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(1).png)

## Creating the Player
Add a **CharacterBody3D** node.  
(From now on, I won’t repeat how to create nodes. If you forget, here’s a hint: *Press Ctrl + A*)  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(2).png)

:::info Best practice 🔥   
If something isn’t clear or you can’t remember how you did it before, go back and check again.  
It’s totally normal - it doesn’t mean you have a bad memory. It just means your brain learns differently.

If you can remember everything without checking, that’s great!  
But always make things clear. Ask questions, explore, experiment!  
:::

Rename CharacterBody3D to **“Player.”**

Next, add these nodes as children of **Player**:  
* MeshInstance3D  
* CollisionShape3D  
* Camera3D  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(3).png)  

For the MeshInstance3D, set the **Mesh** property to **CapsuleMesh.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(4).png)  

For the CollisionShape3D, set the **Shape** property to **CapsuleShape3D.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(5).png)  

Now set the Player camera’s position to **0.5** on the **Y** axis.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(6).png)  

Next, select the **Player** node and attach a script.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(7).png)  

You’ll see this window. Look carefully at the file path -  
it tries to save the script inside the **scenes** folder,  
but we want all scripts inside the **scripts** folder.

Click the little folder icon.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(7.5).png)  

Use the arrow button to go to the project root,  
then navigate into the correct **scripts** folder.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(8).png)  

Keep the same file name and hit **Open.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(9).png)  

Now the path is correct.  
Notice that the template **CharacterBody3D: Basic Movement** is selected.  
Click **Create.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(10).png)  

Then you’ll see the basic movement template code.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(11).png)  

For our project, we need a slightly different script.  
(I’m giving it to you because this tutorial is not focused on advanced coding yet.  
We will learn coding step-by-step later.)

Replace everything in your script with the following:

```
extends CharacterBody3D

@export var SPEED = 3.0
@export var JUMP_VELOCITY = 4.5
@export var SENSITIVITY = 0.003

@onready var camera_3d: Camera3D = $Camera3D

func _ready():
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)

# Handle mouse look and quit input
func _unhandled_input(event):
	if event is InputEventMouseMotion:
		rotate_y(-event.relative.x * SENSITIVITY)
		camera_3d.rotate_x(-event.relative.y * SENSITIVITY)
		camera_3d.rotation.x = clamp(camera_3d.rotation.x, deg_to_rad(-40), deg_to_rad(60))
	
	# Quit game when Esc is pressed
	if Input.is_action_just_pressed("esc"):
		get_tree().quit()
		
func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement
	var input_dir := Input.get_vector("move_left", "move_right", "move_forward", "move_backward")
	var direction := (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)

	move_and_slide()

```

Switch back to the 3D view and press **Ctrl + S** to save.  

## Save Player as a Scene

It’s a good time to save the Player as a scene. We already did this before for **"TheBox"**.

* Right click on the **Player**.
* Click **Save Branch as Scene**.
* Carefully save it inside the correct **scenes** folder.

Finally, it will look like the image below:
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(12\).png)

## The Island Map
To keep things simple, I’ve prepared a small 3D island map for you.  
Download it from this link: **[Rocky Island House](https://skfb.ly/pBVZ6)**
![The Walking Simulator](img/The%20Walking%20Simulator/download-model.png)  

First, open your **assets** folder.  
You can easily open folders from the **FileSystem** tab.
Right click on the **assets** folder and click **Open in File Manager**.
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(14\).png)

This will open your assets folder.  

Next, extract the downloaded zip file. Inside it, you’ll find a folder named **"Map."**  
Copy the extracted **Map** folder into your project’s **assets** folder.

Then it will look like this:
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20\(15\).png)

Switch back to Godot.  
It will import the files automatically.  
Now you’ll see the **Map** folder inside the FileSystem.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(16).png)  

We need to locate the 3D model file.  
Use the search box and type **"map"**.  
You’ll see **Map.gltf** appear.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(17).png)  

Right-click it and select **Instanciate.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(18).png)  

Now the beautiful map appears in the viewport.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(19).png)  

You may notice the player is hidden somewhere below it.  
Move the player upward so you can see it.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(20).png)  

If you try running the project now, you’ll get a bunch of errors like this:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(21).png)  

This is because we haven’t created the **input actions** yet.

## Setting Up Input Actions

Go to **Project → Project Settings**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(22).png)  

In the Project Settings window, switch to the **Input Map** tab.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(23).png)  

In the **Add New Action** box, type `move_forward` and press **Add**.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(24).png)  

Repeat this process until you have these actions:  
`move_forward`  
`move_backward`  
`move_right`  
`move_left`  
`jump`  
`esc`  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(25).png) 

These names **must** match exactly, because the script uses these actions for movement.

Now click the little **plus icon** next to `move_forward` action.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(26).png) 

A small window appears and waits for your input.  
Press **W** on your keyboard.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(27).png) 

Then hit **OK.**

Now it looks like this:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(28).png) 

I also added the **Up Arrow** as a second key.  
So now `move_forward` can be triggered by **W** or **Up Arrow.**  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(29).png) 

Repeat this for all actions:

| Action          | Keys             |
|-----------------|------------------|
| `move_forward`    | W / Up Arrow     |
| `move_backward`   | S / Down Arrow   |
| `move_right`      | D / Right Arrow  |
| `move_left`       | A / Left Arrow   |
| `jump`            | Spacebar         |
| `esc`             | Esc key          |

Once everything is assigned, it should look like this:  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(30).png) 

Close the window.

Now finally, run the project!  
Walk around using **W A S D**, look around with the mouse,  
and press **Esc** to exit.  
![The Walking Simulator](img/The%20Walking%20Simulator/walking_sim_img%20(31).png) 

:::info Any Errors? 👾  
If you get errors when running the project, make sure all input action names are typed correctly.  
(`move_forward`, `move_backward`, `move_right`, `move_left`, `jump`, `esc`)
:::


If you’ve followed everything up to this point - congratulations!  
You now have your very own **walking simulator**.
