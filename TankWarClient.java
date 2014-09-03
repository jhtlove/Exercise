import java.awt.*;
import java.awt.event.*;

public class TankWarClient
{

	public static void main(String[] args)
	{
		new TankWarFrame().launchFrame();

	}

}

class TankWarFrame extends Frame
{
	Graphics g;
	//画的函数，应该在画布上实现
	public void paint(Graphics g)
	{
		Tank t = new Tank();
		Color c = g.getColor();
		g.setColor(Color.red);
		g.fillOval(t.getPosition().x, t.getPosition().y, 50, 50);
		//g.fillOval(10, 10, 50, 50);
		g.setColor(c);
	}
	
	public void launchFrame()
	{
		this.setBounds(100, 100, 800, 800);
		this.setResizable(false);
		this.addWindowListener(new WindowAdapter()
		{

			@Override
			public void windowClosing(WindowEvent arg0)
			{
				setVisible(false);
				System.exit(0);
			}

		});
		


		this.setVisible(true);
		
	}

}

class Tank
{
	public Tank()
	{
		Point p = new Point(50,50);
		setPosition(p);
	}
	//常量
	private enum dd
	{
		UP(1), DOWN, LEFT, RIGHT;
		private int value;

		dd(int i)
		{
			this.value = i;
		}

		dd()
		{

		}
	};

	private Point position;
	

	
	public Point getPosition()
	{
		return position;
	}



	public void setPosition(Point position)
	{
		this.position = position;
	}



	public void move(dd d)
	{
		switch (d)
		{
			case UP:
				position.y--;
				break;
			case DOWN:
				position.y++;
				break;
			case LEFT:
				position.x--;
				break;
			case RIGHT:
				position.x++;
				break;
			default:
				;
		}
	}

//	public void paint()
//	{
//		//Color c = g.getColor();
//		g.setColor(Color.red);
//		//g.fillOval(position.x, position.y, 50, 50);
//		g.fillOval(10, 10, 50, 50);
//		//g.setColor(c);
//	}
}
