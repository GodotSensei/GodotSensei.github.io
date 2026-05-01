---
sidebar_position: 6
---

# Editor Interface Basics - 03

Let's make things a bit cleaner.

## Reusable Scenes
We can reuse things we’ve already created. This saves a lot of time - and performance too.  
Let’s save **TheBox** node as a separate scene.

To do that, right-click on it,  
then click **Save Branch as Scene** from the dropdown.  
![save branch as scene](img/Editor%20Interface%20Basics%2003/savebranch.png)

Next, you’ll see this window. You can rename it, but let’s keep the suggested name and hit **Save.**  
![save branch as scene](img/Editor%20Interface%20Basics%2003/savebranch2.png)

Now it collapses into a single node.  
We can easily duplicate it.

Right-click on it and choose **Duplicate**,  
or just select it and press **Ctrl + D.**  
![duplicate node](img/Editor%20Interface%20Basics%2003/duplicatenode.png)

This creates two boxes stacked on top of each other,  
so let’s move one by dragging the arrows.  
![move cubes](img/Editor%20Interface%20Basics%2003/movecubes.png)

There’s another way to reuse it too.  
Since we made it a scene, you can see it in the **FileSystem** panel.  
Just drag and drop it from there into the viewport.  
![drag cube](img/Editor%20Interface%20Basics%2003/dragcube.png)

Now I’ve changed their positions and rotations.  
![change positions and rotations](img/Editor%20Interface%20Basics%2003/changeposrot.png)

Next, move the camera while checking the preview in the **Inspector.**  
![move camera](img/Editor%20Interface%20Basics%2003/movecamera.png)


## Organize Things

Now, take a look at your **Scene** panel.  
![unorganized scene panel](img/Editor%20Interface%20Basics%2003/unorganizedscenepanel.png)  
It looks a bit messy, right? Let’s fix that.

Add a new **Node3D** and rename it to **“Boxes.”**  
![rename it to "Boxes"](img/Editor%20Interface%20Basics%2003/boxes.png)

Next, we’ll make our **TheBox** nodes children of the **Boxes** node. To do that:  
Hold **Ctrl** and click on both **TheBox** nodes,  
then drag and drop them onto the **Boxes** node.  
![drag boxes to boxes](img/Editor%20Interface%20Basics%2003/drag%20boxes%20to%20boxes.png)

Now it looks like this:  
![Boxes parent](img/Editor%20Interface%20Basics%2003/reparent.png)  
As we discussed earlier, **Boxes** is now the parent of the **TheBox** nodes.

:::info Reparenting 💡  
This process is called *reparenting.*  
You can also do it another way:  
Select the nodes, right-click, and choose **Reparent to New Node.**  
Then a window will appear where you can select the node type.  

That way, you don’t need to create the “Boxes” node beforehand.  
:::

:::info Many Ways to Do the Same Thing 💡  
In Godot, there are many ways to get things done - like what we just did.  
As you get familiar with the engine, you’ll naturally pick your preferred methods.  
Don’t try to memorize everything. What matters most is *practice!*  
:::

You may have noticed this before -  
you can expand or collapse nodes using these little arrows.  
![expand collaps](img/Editor%20Interface%20Basics%2003/expandcollaps.png)

Seems like a simple trick, right?  
Yes, but when your project grows large with many nodes, this helps you stay organized and focused.

Also, by grouping things like this, you can easily move, rotate, or scale all three boxes at once by using the **parent node.**  
![change things using parent](img/Editor%20Interface%20Basics%2003/parentmover.png)

And by toggling the **eye icon**, you can show or hide nodes.  
![toggle visibility](img/Editor%20Interface%20Basics%2003/togglevisibility.png)


## Organize the FileSystem

Take a look at your **FileSystem** now. It can be organized too!  
![filesystem unorganized](img/Editor%20Interface%20Basics%2003/filesystemunorganized.png)

Right-click on the **res://** folder, then select **Create New → Folder.**  
![create new folder](img/Editor%20Interface%20Basics%2003/createnewfolder.png)

Name it **scenes.**  
![folder name scene](img/Editor%20Interface%20Basics%2003/foldernamescene.png)

Then create two more folders named **assets** and **scripts.**  
![assets scripts folders](img/Editor%20Interface%20Basics%2003/assetsscripts.png)

Next, select both **demo.tscn** and **the_box.tscn** (hold **Ctrl**)  
and drag them into the **scenes** folder.  
![drag and drop them to scnes folder](img/Editor%20Interface%20Basics%2003/scenesdrag.png)

Finally, move the **.gd** file into the **scripts** folder.  
![scripts folder](img/Editor%20Interface%20Basics%2003/scriptsfolder.png)


## End of Basics
That’s it for the basics!  
You’re now ready to start building the walking simulator.  
We’ll use this same project for it.  
![End of basics](img/Editor%20Interface%20Basics%2003/endofbasics.png)

:::info Make Experiments 💡  
Try new things - even if they seem a bit crazy.  
This isn’t your dream game yet, so take risks!  
If something breaks, don’t worry - just delete it and make a new project.  
Experimenting is how you truly learn.  
:::

Congratulations on finishing the basics!  
Can’t wait to move on to the walking sim with you - see you there!
