//У компонента центр должен быть в центре, иначе скрипт работать не будет.
//В библиотеке если элемнт двигается на x=x-n, то на плате его надо будет:
//при 0 градусах сдвинуть по х на +n;
//при 90 градусах сдвинуть по y на +n;
//при 180 градусах сдвинуть по х на -n;
//при 270 градусах сдвинуть по y на -n;
//при 360 градусах сдвинуть по х на +n.

var xMin=0;
var xMax=0;
var yMin=0;
var yMax=0;
var xComp=0;
var yComp=0;
var xMove=0;
var yMove=0;
//ShowMessage("var's");

function SBTrack(PTrack) {
if (PTrack.x1 > xMax)
{xMax = PTrack.x1;}
if (PTrack.x2 < xMin)
{xMin = PTrack.x2;}
if (PTrack.y1 > yMax)
{yMax = PTrack.y1;}
if (PTrack.y2 < yMin)
{yMin = PTrack.y2;}
//ShowMessage("SBTrack");
}
//Not worked
function SBPoly(PPoly) {
if (PTrack.x1 > xMax)
{xMax = PTrack.x1;}
if (PTrack.x2 < xMin)
{xMin = PTrack.x2;}
if (PTrack.y1 > yMax)
{yMax = PTrack.y1;}
if (PTrack.y2 < yMin)
{yMin = PTrack.y2;}
//ShowMessage("SBTrack");
}

function MinXYTrack(PTrack) {
xMin=PTrack.x1;
yMin=PTrack.y1;
}

function SBMoveTrack(PTrack) {
PTrack.X1 = PTrack.X1 + xMove;
PTrack.Y1 = PTrack.Y1 + yMove;

PTrack.X2 = PTrack.X2 + xMove;
PTrack.Y2 = PTrack.Y2 + yMove;
//ShowMessage("SBMoveTrack");
}

function Calculate() {
xMove = xComp - ((xMin + xMax)/2);
yMove = yComp - ((yMin + yMax)/2);
//ShowMessage("1)xMove="+xMove+"xComp="+xComp);
//ShowMessage("2)xMin="+xMin+"xMax="+xMax+"(xMin + xMax)/2="+((xMin + xMax)/2));
//ShowMessage("3)yMove="+yMove+"yComp="+yComp);
//ShowMessage("4)yMin="+yMin+"yMax="+yMax+"(yMin + yMax)/2="+((yMin + yMax)/2));
}

function SBComponent(Component) {
xComp = Component.x;
yComp = Component.y;
//ShowMessage("5)Component.x="+Component.x+"; Component.y="+Component.y+"; xComp="+xComp+"; yComp="+yComp);
//ShowMessage("Component.x"+Component.x+"Component.CenterX"+Component.CenterX+"Component.CompCenterX"+Component.CompCenterX+"Component.ComponentCenterX"+Component.ComponentCenterX+"Component.x1"+Component.x1+"Component.CenterX1"+Component.CenterX1+"Component.CompCenterX1"+Component.CompCenterX1+"Component.ComponentCenterX1"+Component.ComponentCenterX1);
//ShowMessage("SBComponent");
}

function Start()
{
var Prim = PCBServer.IPCB_Primitive;
var Board = PCBServer.GetCurrentPCBBoard;

if ((Board.SelectecObjectCount == 0)||(Board == null))
       {ShowMessage('Error! There are no selected objects');}
       else {ShowMessage('Remember about hidded names and center of component!');

       //for to xMin and yMin
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: MinXYTrack(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }

       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: SBTrack(Prim);
                          break;
                          case eComponentObject: SBComponent(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }

       Calculate();
       //ShowMessage("8)xMin="+xMin+"; yMin="+yMin+"; xMax= "+xMax+"; yMax="+yMax+"; xComp="+xComp+"; yComp="+yComp+"; xMove="+xMove+"; yMove="+yMove);
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: SBMoveTrack(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }
       //ShowMessage("9)Second for");
Board.ViewManager_FullUpdate();
//ShowMessage("Script end");
}
}

function FastStart()
{
var Prim = PCBServer.IPCB_Primitive;
var Board = PCBServer.GetCurrentPCBBoard;

if ((Board.SelectecObjectCount == 0)||(Board == null))
       {ShowMessage('Error! There are no selected objects');}
       else {//ShowMessage('Remember about hidded names and center of component!');
       //for to xMin and yMin
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: MinXYTrack(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }

       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: SBTrack(Prim);
                          break;
                          case eComponentObject: SBComponent(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }
       Calculate();
       for (var i = Board.SelectecObjectCount - 1; i >= 0 ; i--)
       {
       Prim = Board.SelectecObject(i);
       Prim.BeginModify();
                          switch (Prim.ObjectID) {
                          case eTrackObject: SBMoveTrack(Prim);
                          break;
                          default:
                          break;
                          }
       Prim.EndModify();
       Prim.GraphicallyInvalidate();
       }
       Board.ViewManager_FullUpdate();
}
}
