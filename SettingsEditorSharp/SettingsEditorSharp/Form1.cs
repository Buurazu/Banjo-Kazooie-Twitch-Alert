using System;
using System.IO;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Ini;

namespace SettingsEditorSharp
{
    public partial class Form1 : Form
    {
        string drawOutline, allowRefollows, fanfareOnFollow;

        string[] characters;

        bool initial = true;

        private void writeSettings()
        {
            string theJSstring =
                "names = [";

            IniFile ini = new IniFile(Directory.GetCurrentDirectory() + "\\settings.ini");
            ini.IniWriteValue("Settings", "rewardname", textBox1.Text);
            ini.IniWriteValue("Settings", "fanfarevol", numericUpDown1.Value.ToString());
            ini.IniWriteValue("Settings", "othervol", numericUpDown2.Value.ToString());
            ini.IniWriteValue("Settings", "outline", drawOutline);
            ini.IniWriteValue("Settings", "refollows", allowRefollows);
            ini.IniWriteValue("Settings", "fanfareonfollow", fanfareOnFollow);
            for (int i = 0; i < characters.Length; i++)
            {
                ini.IniWriteValue("Settings", checkedListBox1.Items[i].ToString(), characters[i]);

                theJSstring += "\"" + checkedListBox1.Items[i].ToString() + "\"";
                if (i != characters.Length - 1) theJSstring += ", ";
            }

            theJSstring +=
                "];\n\nsettings = {\"rewardname\":\"" + textBox1.Text +
                "\",\"drawOutline\":" + drawOutline +
                ",\"allowRefollows\":" + allowRefollows +
                ",\"fanfareOnFollow\":" + fanfareOnFollow +
                ",\"fanfareVol\":" + numericUpDown1.Value.ToString() +
                ",\"otherVol\":" + numericUpDown2.Value.ToString();

            for (int i = 0; i < characters.Length; i++)
            {
                theJSstring += ",\"load" + checkedListBox1.Items[i].ToString() + "\":" + characters[i];
            }
            theJSstring += "};";

            System.IO.File.WriteAllText("settings.js", theJSstring);
        }

        public Form1()
        {
            InitializeComponent();
            characters = new string[checkedListBox1.Items.Count];
            IniFile ini = new IniFile(Directory.GetCurrentDirectory() + "\\settings.ini");

            textBox1.Text = ini.IniReadValue("Settings", "rewardname", "Textbox on Stream");

            numericUpDown1.Value = Decimal.Parse(ini.IniReadValue("Settings", "fanfarevol", "20"));
            numericUpDown2.Value = Decimal.Parse(ini.IniReadValue("Settings", "othervol", "30"));

            drawOutline = ini.IniReadValue("Settings", "outline", "false");
            if (drawOutline == "true") label9.Visible = true;
            else label10.Visible = true;

            allowRefollows = ini.IniReadValue("Settings", "refollows", "false");
            if (allowRefollows == "true") label11.Visible = true;
            else label12.Visible = true;

            fanfareOnFollow = ini.IniReadValue("Settings", "fanfarefollows", "true");
            if (fanfareOnFollow == "true") label20.Visible = true;
            else label19.Visible = true;

            for (int i = 0; i < characters.Length; i++)
            {
                characters[i] = ini.IniReadValue("Settings", checkedListBox1.Items[i].ToString(), "true");
                if (characters[i] == "true")
                {
                    checkedListBox1.SetItemChecked(i, true);
                }
            }

            initial = false;

            pictureBox1.Image = (System.Drawing.Image)Properties.Resources.ResourceManager.GetObject("Banjo");
            if (characters[0] == "true") pictureBox1.BackColor = System.Drawing.Color.Green;
            else pictureBox1.BackColor = System.Drawing.Color.Firebrick;

        }

        private void checkedListBox1_ItemCheck(object sender, ItemCheckEventArgs e)
        {

            if (!initial)
            {
                pictureBox1.Image = (System.Drawing.Image)Properties.Resources.ResourceManager.GetObject(checkedListBox1.Items[e.Index].ToString());
                if (e.NewValue == CheckState.Checked)
                {
                    characters[e.Index] = "true";
                    pictureBox1.BackColor = System.Drawing.Color.Green;
                }
                else
                {
                    characters[e.Index] = "false";
                    pictureBox1.BackColor = System.Drawing.Color.Firebrick;
                }

                writeSettings();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            writeSettings();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            drawOutline = "true";
            label9.Visible = true; label10.Visible = false;
            writeSettings();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            drawOutline = "false";
            label9.Visible = false; label10.Visible = true;
            writeSettings();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            allowRefollows = "true";
            label11.Visible = true; label12.Visible = false;
            writeSettings();
        }

        private void button4_Click_1(object sender, EventArgs e)
        {
            allowRefollows = "false";
            label11.Visible = false; label12.Visible = true;
            writeSettings();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            fanfareOnFollow = "true";
            label20.Visible = true; label19.Visible = false;
            writeSettings();
        }

        private void button8_Click(object sender, EventArgs e)
        {
            fanfareOnFollow = "false";
            label20.Visible = false; label19.Visible = true;
            writeSettings();
        }

        private void button6_Click(object sender, EventArgs e)
        {
            writeSettings();
        }

    }
}
